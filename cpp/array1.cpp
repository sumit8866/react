#include <iostream>
using namespace std;
int main()
{

    int arr[5];
    int i;

    for (i = 0; i < 5; i++)
    {
        cout << "enter element of position:";
        cin >> arr[i];
    }
    for (i = 0; i < 5; i++)
    {
        cout << arr[i] << "  " << endl;
    }
    cout << "question no. 1 answer:";
    for (i = 1; i < 5; i++)
    {
        cout << arr[i] << "  ";
    }
    cout << arr[0] << " ";
    cout << endl;
    cout << "question no. 2 answer:";
    cout << arr[4] << " ";
    for (i = 1; i < 4; i++)
    {
        cout << arr[i] << "  ";
    }
    cout << arr[0] << " ";

    return 0;
}