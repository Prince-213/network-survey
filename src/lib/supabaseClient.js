import { createClient } from '@supabase/supabase-js'


export const supabase = createClient('https://hnuabzvdekpcvstajmkn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhudWFienZkZWtwY3ZzdGFqbWtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY1ODE2OTQsImV4cCI6MjAxMjE1NzY5NH0.UT-BND-oCFg5iWKd-E06iI0artWySmBeWJ-leGI4k5w')