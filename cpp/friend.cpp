/* friend function => special function
                => declared only inside class
                => define outside class
                => any type access

    => object as argument and object as return
*/

#include <iostream>
using namespace std;
class Box
{

    friend Box add(Box, Box);

    int l, w, h;

public:
    void setData(int a, int b, int c)
    {
        l = a, w = b, h = c;
    }
    int getVolume()
    {
        return l * w * h;
    }
};

Box add(Box a, Box b)
{
    Box t;
    t.l = a.l + b.l;
    t.w = a.w + b.w;
    t.h = a.h + b.h;
    return t;
}

int main()
{
    Box a, b, c, d;
    a.setData(2, 2, 2);
    b.setData(5, 5, 5);

    cout << "Volume of A is: " << a.getVolume() << endl;
    cout << "Volume of B is: " << b.getVolume() << endl;

    c = add(a, b); // 7 7 7
    cout << "Volume of C is: " << c.getVolume() << endl;
}

// largest number find out using friend function
