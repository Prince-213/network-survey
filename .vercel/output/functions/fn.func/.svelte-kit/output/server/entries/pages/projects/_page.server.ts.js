import { f as fail } from "../../../chunks/index.js";
import { s as supabase } from "../../../chunks/supabaseClient.js";
const actions = {
  register: async ({ request, cookies }) => {
    const data = await request.formData();
    const name = data.get("name");
    const age = data.get("age");
    const location = data.get("location");
    const device = data.get("device");
    const sms = data.get("sms");
    const rating = data.get("rating");
    const revenue = data.get("revenue");
    const dataUse = data.get("data");
    const network = data.get("network");
    const calls = data.get("calls");
    let user = {
      revenue,
      smsCount: sms,
      callCount: calls,
      dataUsage: dataUse
    };
    function determineUserPlan(user2) {
      const { revenue: revenue2, smsCount, callCount, dataUsage } = user2;
      const familyPlanThreshold = {
        minRevenue: 500,
        // Minimum revenue for Family Plan
        minSmsCount: 100,
        // Minimum SMS count for Family Plan
        minCallCount: 50,
        // Minimum call count for Family Plan
        maxDataUsage: 70
        // Maximum data usage for Family Plan in GB
      };
      const premiumPlanThreshold = {
        minRevenue: 1e3,
        // Minimum revenue for Premium Plan
        minSmsCount: 200,
        // Minimum SMS count for Premium Plan
        minCallCount: 100,
        // Minimum call count for Premium Plan
        maxDataUsage: 20
        // Maximum data usage for Premium Plan in GB
      };
      if (revenue2 >= familyPlanThreshold.minRevenue && smsCount >= familyPlanThreshold.minSmsCount && callCount >= familyPlanThreshold.minCallCount && dataUsage <= familyPlanThreshold.maxDataUsage) {
        return "Family Plan";
      } else if (revenue2 >= premiumPlanThreshold.minRevenue && smsCount >= premiumPlanThreshold.minSmsCount && callCount >= premiumPlanThreshold.minCallCount && dataUsage >= premiumPlanThreshold.maxDataUsage) {
        return "Premium Plan";
      } else {
        return "Bundle Plan";
      }
    }
    console.log(determineUserPlan(user));
    console.log(data);
    try {
      const { data: data2, error } = await supabase.from("customers").insert([
        {
          name,
          age,
          location,
          device,
          sms,
          rating,
          revenue,
          data: dataUse,
          network,
          calls,
          plan: determineUserPlan(user)
        }
      ]).select();
      if (error) {
        return fail(404, {
          message: "could not save values",
          error: true,
          plan: "undetermined"
        });
      }
      return {
        message: "successful",
        error: false,
        plan: determineUserPlan(user)
      };
    } catch (error) {
      return fail(404, {
        message: "unsuccessful",
        error: true,
        plan: "undetermined"
      });
    }
  }
};
export {
  actions
};
