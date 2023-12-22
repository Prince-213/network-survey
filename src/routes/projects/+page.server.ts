import { fail } from "@sveltejs/kit";
import { supabase } from "$lib/supabaseClient.js";

export const actions = {
  register: async ({ request, cookies }) => {
    const data: any = await request.formData();

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

    type users = {
        revenue: number;
        smsCount: number;
        callCount: number;
        dataUsage: number;
    };

    let user: users = {
        revenue: revenue,
        smsCount: sms,
        callCount: calls,
        dataUsage: dataUse,
    };

    function determineUserPlan(user: users) {
      // Assuming user is an object with properties: revenue, smsCount, callCount, dataUsage
        const { revenue, smsCount, callCount, dataUsage } = user;

      // Define thresholds for each plan
        const familyPlanThreshold = {
          minRevenue: 500, // Minimum revenue for Family Plan
          minSmsCount: 100, // Minimum SMS count for Family Plan
          minCallCount: 50, // Minimum call count for Family Plan
          maxDataUsage: 70, // Maximum data usage for Family Plan in GB
        };

        const premiumPlanThreshold = {
          minRevenue: 1000, // Minimum revenue for Premium Plan
          minSmsCount: 200, // Minimum SMS count for Premium Plan
          minCallCount: 100, // Minimum call count for Premium Plan
          maxDataUsage: 20, // Maximum data usage for Premium Plan in GB
        };

        // Define the rules to check for each plan
        if (
            revenue >= familyPlanThreshold.minRevenue &&
            smsCount >= familyPlanThreshold.minSmsCount &&
            callCount >= familyPlanThreshold.minCallCount &&
            dataUsage <= familyPlanThreshold.maxDataUsage
        ) {
            return "Family Plan";
        } else if (
            revenue >= premiumPlanThreshold.minRevenue &&
            smsCount >= premiumPlanThreshold.minSmsCount &&
            callCount >= premiumPlanThreshold.minCallCount &&
            dataUsage >= premiumPlanThreshold.maxDataUsage
        ) {
            return "Premium Plan";
        } else {
          return "Bundle Plan"; // Default to Bundle Plan if none of the above conditions are met
        }
    }

    // Example usage:


    console.log(determineUserPlan(user)); // Output: Family Plan
    // Output: Premium Plan

    console.log(data);

    try {
        
        const { data, error } = await supabase
        .from('customers')
        .insert([
            { 
                name: name,
                age: age,
                location: location,
                device: device,
                sms: sms,
                rating: rating,
                revenue: revenue,
                data: dataUse,
                network: network,
                calls: calls,
                plan: determineUserPlan(user)
            },
        ])
        .select()

        if (error) {
            return fail(404, {
                message: "could not save values",
                error: true,
                plan: 'undetermined'
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
            plan: 'undetermined',
        });
    }

    
    },
};
