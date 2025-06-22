import { supabase } from './supabaseClient';

export const getMedications = async () => {
  const { data, error } = await supabase.from('medications').select('*');
  if (error) throw error;
  return data;
};

export const addMedication = async (medication) => {
  const { data, error } = await supabase.from('medications').insert([medication]);
  if (error) throw error;
  return data;
};

export const updateMedication = async (id, updates) => {
  const { data, error } = await supabase.from('medications').update(updates).eq('id', id);
  if (error) throw error;
  return data;
};

export const deleteMedication = async (id) => {
  const { data, error } = await supabase.from('medications').delete().eq('id', id);
  if (error) throw error;
  return data;
};