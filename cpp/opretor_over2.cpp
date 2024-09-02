#include<iostream>
using namespace std;
class complax{
    private:
    int a , b;
    public :
    complax(){
        a = 0;
        b = 0;
    }
    complax(int x,int y){
        a = x;
        b = y;
    }
    void display(){
        cout << "Value Of A :" << a << endl;
        cout << "Value Of B :" << b << endl;
    }

    complax operator-(complax t){
        complax r;

        r.a = a - t.a;
        r.b = b - t.b;
        return r;
    }
};
int main()
{
    class complax x(2,4),y(6,3),z;

    cout<<"Object Is = "<<endl;
    x.display();

    cout<<"Object Is = "<<endl;
    y.display();

    z=x-y;
    cout << "Sum of Object Is = "<<endl;
    z.display();
    return 0;
}