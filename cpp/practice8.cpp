#include <iostream>
using namespace std;
int main()
{
    int a, b;
    int *x, *y;

    cout << "enter a nmber:";
    cin >> a;
    cout << "enter b nmber:";
    cin >> b;

    x = &a;
    y = &b;

    *x = *x + *y;
    *y = *x - *y;
    *x = *x - *y;
    cout << " a:" << *x << endl;
    cout << " b:" << *y << endl;
    return 0;
}