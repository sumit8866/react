#include<iostream>
using namespace std;
class base{
  int a,b;
  public:
  int c;
  void getdata(){
  a=10;
  b=20;
  }
  void display(){
    cout<<"a="<<a<<endl;
    cout<<"B="<<b<<endl;

  }
};
class derive : public base{
    public:
    void displaydata(){
        c=30;
        getdata();
        display();
        
        cout<<"c="<<c<<endl;
    }

} ;
int main()
{
    derive obj;
    obj.displaydata();
return 0;
}