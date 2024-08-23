#include <iostream>
using namespace std;
int main()
{
    int n, sum = 0;
    cout << "enter arr size";
    cin >> n;

    int arr[n][n];

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            cout << "enter elements";
            cin >> arr[i][j];
        }
        cout << endl;
    }
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            cout << arr[i][j];
            sum += arr[i][j];
        }
        cout << endl;
    }
    cout << "total" << sum;
}
