#include <iostream>
using namespace std;

class base
{

protected:
    int a;

public:
    void set1()
    {
        cout << "enter value of a:";
        cin >> a;
    }
};
class base2
{

protected:
    int b;

public:
    void set2()
    {
        cout << "enter value of b:";
        cin >> b;
    }
};
class derive : public base, public base2
{
public:
    void product()
    {
        cout << "a * b:" << a * b << endl;
    }
};
int main()
{

    class derive c;
    c.set1();
    c.set2();
    c.product();
    return 0;
}