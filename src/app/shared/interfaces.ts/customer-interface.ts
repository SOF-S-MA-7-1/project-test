/**
 *  Define interface for customers
 *  Specifies variables for each interface
 *  */
export interface CustomerInterface {
  /**
   * Variable declaration with data type
   * Variables can de defined as required or optional
   * */
  id: string;
  identityCard: string;
  username: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  address: string;
  email: string;
  // optional?: string; // Optional field, use ? before :
}