// supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qimvatafgcbvokvujmmp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpbXZhdGFmZ2Nidm9rdnVqbW1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI3NjEyNzQsImV4cCI6MjAzODMzNzI3NH0.QttxI8oNu6Kht3dY1WYCgApTXAHBh0CnBBMhWNPATRI';
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
