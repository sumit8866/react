#include<iostream>
using namespace std;

class shape{
    public:
    void s(int r){
        int s;
        s = 4 * 3.14 * r * r;
        cout << "Shpere Area = "<< s << endl;
    }
    void s(double s){
        int sqr;
        sqr = 6*s*s;
        cout << "Cube Area = "<< sqr << endl;
    }
    void s(int l,int w,int h){
        int rec;
        rec = 2 * (w*l + h*l +h*w);
        cout << "Rectangular Prism Area = "<< rec << endl;
    }
    void s(int r,int h){
        int cylinder;
        cylinder = 2*3.14*r*h+2*3.14*r*r;
        cout << "cylinder Area = "<< cylinder<< endl;
    }

};

int main()
{
    shape a;
    a.s(10);
    a.s(14.0);
    a.s(4, 5 , 6);
    a.s(13.0, 12.0);

    return 0;
}