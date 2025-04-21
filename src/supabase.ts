import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://uyhraagmvhsehgfgyijh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5aHJhYWdtdmhzZWhnZmd5aWpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0NjI5MjYsImV4cCI6MjA1OTAzODkyNn0.3b9c77yIRYDbD018EDIaw4LPGuDUI25aZSuBJdlPobs"
);
