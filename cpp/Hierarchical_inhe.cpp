#include<iostream>
using namespace std;
class base{
    public:
    int a;
    void setA(){
        cout<< "enter a value:";
        cin >> a;
    }
};
class derive : public base{
public:
    int b;
    void setB(){
        cout<< "enter b value:";
        cin >> b;
    }
       void sum(){
         cout <<"sum ="<<a+b;
       }
};
class derive1 : public base{
public:
    int c;
    void setC(){
        cout<< "enter c value:";
        cin >> c;
    }
       void sum(){
         cout <<"sum ="<<a+c;
       }
};
int main()
{
     derive a;
     a.setA();
     a.setB();
     a.sum();

     derive1 a1;
     a1.setA();
     a1.setC();
     a1.sum();
return 0;
}