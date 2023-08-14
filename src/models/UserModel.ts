export default class UserModel {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  profilePictureUrl?: string;
  profileBackgroundUrl?: string;
  profileDescription?: string;
  websiteUrl?: string;
  registrationDate: Date;
  lastLoginDate: Date;

  constructor(
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    profilePictureUrl: string,
    profileBackgroundUrl: string,
    profileDescription: string,
    websiteUrl: string,
    registrationDate: Date,
    lastLoginDate: Date
  ) {
    this.username = username;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.profilePictureUrl = profilePictureUrl;
    this.profileBackgroundUrl = profileBackgroundUrl;
    this.profileDescription = profileDescription;
    this.websiteUrl = websiteUrl;
    this.registrationDate = registrationDate;
    this.lastLoginDate = lastLoginDate;
  }
}
