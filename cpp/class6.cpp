#include <iostream>
using namespace std;

class T1
{
private:
    int adno;
    char name[100];
    float mark[5], avg, sum;
    void getavg();

public:
    void SCHEDULE()
    {
        cout << "name:";
        gets(name);
        cout << "addmission number:";
        cin >> adno;
        for (int i = 1; i <= 5; i++)
        {
            cout << "enter " << i << "sub mark";
            cin >> mark[i];
            sum += mark[i];
        }
        getavg();
    }
    void DISPTEST()
    {
        cout << "name: " << name << endl;
        cout << "addmission number: " << adno << endl;
        for (int i = 1; i <= 5; i++)
        {
            cout << "mark of " << i << "sub mark" << mark[i] << endl;
        }
        cout << "total:" << sum << endl;
        cout << "avg: " << avg << endl;
    }
};
void T1 ::getavg()
{
    avg = sum / 5;
};
int main()
{
    T1 b1;
    b1.SCHEDULE();
    b1.DISPTEST();

    return 0;
}