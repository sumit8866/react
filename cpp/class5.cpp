#include <iostream>
using namespace std;

class T1
{
private:
    int bnumber;
    char btitle[100];
    float price, total;
    void tcost(int n);

public:
    void S()
    {
        cout << "book title:";
        gets(btitle);
        cout << "book number:";
        cin >> bnumber;
        cout << "pricce:";
        cin >> price;
    }
    void DISPTEST()
    {
        int n;
        cout << "book title: " << btitle << endl;
        cout << "book number : " << bnumber << endl;
        cout << "price : " << price << endl;
        cout << "total copy :";
        cin >> n;
        tcost(n);

        cout << "total cost : " << total << endl;
    }
};
void T1 ::tcost(int n)
{
    total = n * price;
};
int main()
{
    T1 b1;
    b1.S();
    b1.DISPTEST();

    return 0;
}