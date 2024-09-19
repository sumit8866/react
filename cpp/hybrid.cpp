#include <iostream>
using namespace std;

class base
{
public:
    int a;
    void setA()
    {
        cout << "enter a value:";
        cin >> a;
    }
};
class derive : public base
{
public:
    int b;
    void setB()
    {
        cout << "enter b value:";
        cin >> b;
    }
};
class base2
{
public:
    int c;
    void setC()
    {
        cout << "enter c value:";
        cin >> c;
    }
};
class derive1 : public base2, public derive
{
public:
    void product()
    {
        cout << "a*b*c=" << a * b * c << endl;
    }
};
int main()
{
    derive1 a;
    a.setA();
    a.setB();
    a.setC();
    a.product();
    return 0;
}