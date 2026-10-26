-- 1. Membuat Tabel Profiles (Terhubung dengan Supabase Auth)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  username TEXT NOT NULL,
  absen INT NOT NULL,
  kelas TEXT NOT NULL,
  role TEXT DEFAULT 'siswa' CHECK (role IN ('admin', 'guru', 'siswa')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 2. Mengaktifkan Row Level Security (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- 3. Kebijakan RLS
CREATE POLICY "User dapat melihat profil sendiri" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "User dapat mengupdate profil sendiri" ON profiles FOR UPDATE USING (auth.uid() = id);

-- 4. Trigger: Otomatis membuat profil saat user mendaftar
CREATE OR REPLACE FUNCTION public.handle_new_user() 
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email, username, absen, kelas, role)
  VALUES (
    new.id, 
    new.email, 
    new.raw_user_meta_data->>'username', 
    (new.raw_user_meta_data->>'absen')::int, 
    new.raw_user_meta_data->>'kelas', 
    'siswa'
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
