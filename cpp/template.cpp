#include<iostream>
using namespace std;

template<class t>
void display(t t1)
{
    cout <<"diplay template:"<<t1<<endl;
}



template<class x,class y>
void Display(x a,y b){
    cout<<"display template:"<<a<<"   "<<b<<endl;
}




template <class t>
t sum(t a,t b)
{
    return a-b;
}



int main()
{
    display(20000);
    display(23.2532455);
    display('d');

    Display(20000,'s');
    Display(23.2532455,3555);
    Display('s','p');
cout <<sum (50,40)<<endl;
cout << sum(5.5,5.5);
    
return 0;
}