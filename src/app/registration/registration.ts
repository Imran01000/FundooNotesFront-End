export class Registration{
    fname: string;
    lname: string;
    email: string;
    password: string;
    mobileNo: string;
    constructor(fname: string, lname: string, email: string, password: string, mobileNo: string)
    {
       this.fname = fname;
       this.lname = lname;
       this.email = email;
       this.password = password;
       this.mobileNo = mobileNo;
    }
}
