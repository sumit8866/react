#include<iostream>
using namespace std;
class complax{
    private:
    int a , b;
    public :

    void setdata(int x,int y){
        cout<< "enter X:";
        cin >>x; 
        cout<< "enter Y:";
        cin >>y; 
        a=x;
        b=y;
    }
    void display(){
        cout << "Value Of A :" << a << endl;
        cout << "Value Of B :" << b << endl;
    }
    void operator-(){
        a=-a;
        b=-b;
    }
};
int main(){

    complax n;
    n.setdata(6,-66);
    n.display();
    -n;
    cout<<"after" <<endl;
    n.display();

}