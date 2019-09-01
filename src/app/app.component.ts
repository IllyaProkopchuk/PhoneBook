import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HW4';
  users: Array<any> = [
    {
      fname: 'Illya',
      lname: 'Prokopchuk',
      phone: '0675338338'
    },
    {
      fname: 'Pavlo',
      lname: 'Gavno',
      phone: '0674444444'
    },
    {
      fname: 'Fasol',
      lname: 'Tepluchniy',
      phone: '0635132643'
    },
    {
      fname: 'Bograch',
      lname: 'Varenyi',
      phone: '0503332221'
    },
    {
      fname: 'Kiidenko',
      lname: 'Loh',
      phone: '0491294194'
    },
  ];
  fname: string;
  fnameEdit: string;
  lname: string;
  lnameEdit: string;
  phone: string;
  phoneEdit: string;
  saveIndex: number;
  checker: boolean = false;
  arrow: string;
  findBlock: string;

  public save(): void {
    let newUser = new Users(this.fname, this.lname, this.phone);
    this.users.push(newUser);
    this.fname = '';
    this.lname = '';
    this.phone = '';
  }
  public deleteUser(index): void {
    this.users.splice(index, 1);
  }
  public editUser(index): void {
    this.saveIndex = index;
    this.fnameEdit = this.users[index].fname;
    this.lnameEdit = this.users[index].lname;
    this.phoneEdit = this.users[index].phone;
  }
  public saveEdit(index): void {
    this.users[this.saveIndex].fname = this.fnameEdit;
    this.users[this.saveIndex].lname = this.lnameEdit;
    this.users[this.saveIndex].phone = this.phoneEdit;
  }
  public sortByFname(): void {
    if (this.checker) {
      function compare(a, b) {
        if (a.fname < b.fname) {
          return -1;
        }
        if (a.fname > b.fname) {
          return 1;
        }
        return 0;
      }
      this.users.sort(compare);
      this.checker = false;
      document.getElementById('fnameTh').innerHTML = 'First Name ▲';
    } else {
      function compare(b, a) {
        if (a.fname < b.fname) {
          return -1;
        }
        if (a.fname > b.fname) {
          return 1;
        }
        return 0;
      }
      this.users.sort(compare);
      this.checker = true;
      document.getElementById('fnameTh').innerHTML = 'First Name ▼';
    }
    document.getElementById('lnameTh').innerHTML = 'Last Name';
    document.getElementById('numberTh').innerHTML = 'Number';
  }


  public sortByLname(): void {
    if (this.checker) {
      function compare(a, b) {
        if (a.lname < b.lname) {
          return -1;
        }
        if (a.lname > b.lname) {
          return 1;
        }
        return 0;
      }
      this.users.sort(compare);
      this.checker = false;
      document.getElementById('lnameTh').innerHTML = 'Last Name ▲';
    } else {
      function compare(b, a) {
        if (a.lname < b.lname) {
          return -1;
        }
        if (a.lname > b.lname) {
          return 1;
        }
        return 0;
      }
      this.users.sort(compare);
      this.checker = true;
      document.getElementById('lnameTh').innerHTML = 'Last Name ▼';
    }
    document.getElementById('fnameTh').innerHTML = 'First Name';
    document.getElementById('numberTh').innerHTML = 'Number';
  }

  public sortByNumber(): void {
    if (this.checker) {
      function compare(a, b) {
        if (a.phone < b.phone) {
          return -1;
        }
        if (a.phone > b.phone) {
          return 1;
        }
        return 0;
      }
      this.users.sort(compare);
      this.checker = false;
      document.getElementById('numberTh').innerHTML = 'Number ▲';
    } else {
      function compare(b, a) {
        if (a.phone < b.phone) {
          return -1;
        }
        if (a.phone > b.phone) {
          return 1;
        }
        return 0;
      }
      this.users.sort(compare);
      this.checker = true;
      document.getElementById('numberTh').innerHTML = 'Number ▼';
    }
    document.getElementById('fnameTh').innerHTML = 'First Name';
    document.getElementById('lnameTh').innerHTML = 'Last Name';
  }

}


interface IUser {
  fname: string;
  lname: string;
  phone: string;
}

class Users implements IUser {
  constructor(
    public fname: string,
    public lname: string,
    public phone: string
  ) { }
};