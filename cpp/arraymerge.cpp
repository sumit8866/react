#include <iostream>
using namespace std;
int main()
{
    int arrm[50];
    int arr[3];
    int i;

    for (i = 0; i < 3; i++)
    {
        cout << "enter element of position:";
        cin >> arr[i];
    }
    for (int i = 0; i < 3; i++)
    {
        cout << arr[i];
        arrm[i] = arr[i];
    }
    int a;
    a = i;
    int arr1[3];
    for (int i = 0; i < 3; i++)
    {
        cout << "enter element of position:";
        cin >> arr1[i];
    }
    for (int i = 0; i < 3; i++)
    {
        cout << arr1[i];
        arrm[a] = arr1[i];
        a++;
    }
    cout << endl;
    cout << "merge array:" << endl;
    for (int i = 0; i < a; i++)
    {

        cout << arrm[i] << " ";
    }

    return 0;
}