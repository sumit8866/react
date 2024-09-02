#include <iostream>
using namespace std;

class T2
{

public:
    void f1(int r)
    {

        int s;
        s = 3.14 * r * r;
        cout << "circle area = " << s << endl;
    }
    void f1(double r)
    {

        int sqr;
        sqr = r * r;
        cout << "Square Area = " << sqr << endl;
    }
    void f1(int l,int b){

    int rec;
    rec=l*b;
    cout << "Rectangle area = "<< rec <<endl;
}
    void f1(double l, double b)
    {
        int tri;
        tri = (l * b) / 2;
        cout << "triangle Area = " << tri << endl;
    }
};
int main (){

    T2 a;
    a.f1(10);
    a.f1(14.0);
    a.f1(4, 5);
    a.f1(13.0, 12.0);
    return 0;
}
