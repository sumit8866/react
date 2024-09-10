#include<iostream>
using namespace std;

class base{
    public:
   static int number;
   static int i;
    base() {
        number++;
        i++;
    }
   static void display(){
        cout <<"out put"<<i<<endl;
    }
    static void Display(){
        cout<< "output"<<number<<endl;

    }
};

int base :: number=10;
int base :: i=0;
int main()
{
    base a;
    a.display();
    base b;
    b.display();
    base c;
    c.Display();
    base d;
    d.Display();
return 0;
}