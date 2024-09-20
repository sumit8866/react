#include <iostream>
using namespace std;
int main()
{
    int size = 5;
    int arr[size];
    int i;
    int temp;

    for (i = 0; i < size; i++)
    {
        printf("enter element of position:");
        scanf("%d", &arr[i]);
    }
    for (i = 0; i < size; i++)
    {
        printf("  %d", arr[i]);
    }
    // cout <<endl;
    // for(int i=5;i>0;i--){

    //     cout << arr[i-1]<<"  ";
    // }
    temp = arr[0];
    arr[0] = arr[size - 1];
    arr[size - 1] = temp;

    for (i = 0; i < size; i++)
    {
        printf(" %d ", arr[i]);
    }

    return 0;
}