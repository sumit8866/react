#include <iostream>
using namespace std;

class T2
{

public:
    T2(int r)
    {

        int s;
        s = 3.14 * r * r;
        cout << "circle area = " << s << endl;
    }
    T2(double r)
    {

        int sqr;
        sqr = r * r;
        cout << "Square Area = " << sqr << endl;
    }
    T2(int l,int b){

    int rec;
    rec=l*b;
    cout << "Rectangle area = "<< rec <<endl;
}
    T2(double l, double b)
    {
        int tri;
        tri = (l * b) / 2;
        cout << "triangle Area = " << tri << endl;
    }
};
int main (){

    T2 cir(5),sqr(60.0),rec(5,4),tri(6.0,7.0);
    
    return 0;
}
