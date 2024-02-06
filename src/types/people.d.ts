declare type People = Person[];

declare type Person = {
  id: Number;
  token: String;
  message: String;
  name: String;
};


declare type PeopleState = {
  People : People;
  currentPerson: Person | null;
  error: Boolean;
}