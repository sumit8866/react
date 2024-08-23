#include<iostream>
using namespace std;
int  main(){
    int n, r = 0, rr;
 cout <<"Enter an integer: ";
  cin >>n;

  while (n != 0) {
    rr = n % 10;
    r = r * 10 + rr;
    n /= 10;
  }

  cout << "Reversed number " <<r <<endl;
  if (n = r){
    cout << r << "same as integer"<< endl;

  }else{
    cout << r << "not same as integer";
  }
}
