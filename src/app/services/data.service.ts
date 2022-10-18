import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

export const TABLE_VOTINGS = 'votings';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private supabase: SupabaseClient;
  constructor() { 
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

startVoting(){

  return this.supabase
    .from(TABLE_VOTINGS)
    .insert({
      voting_question: 'My question',
      description: 'My description',
    });
}

getVotings(){
  return this.supabase
  .from(TABLE_VOTINGS)
  .select('*');
}
}
