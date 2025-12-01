/*
  # Add referral_source column to applications table

  1. Changes
    - Add `referral_source` column (text, optional) to track how applicants heard about the club
  
  2. Important Notes
    - This column is optional as it may not be collected from all applicants
    - Existing records will have NULL values for this field
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'applications' AND column_name = 'referral_source'
  ) THEN
    ALTER TABLE applications ADD COLUMN referral_source text;
  END IF;
END $$;
