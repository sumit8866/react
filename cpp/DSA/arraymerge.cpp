#include <iostream>
using namespace std;
int main()
{
    int arrm[50];
    int n;
    printf("enter array size:");
    scanf("%d", &n);
    int arr[n];
    int i;
    for (i = 0; i < n; i++)
    {
        printf("enter element of position:");
        scanf("%d", &arr[i]);
    }
    for (i = 0; i < n; i++)
    {
        printf("  %d", arr[i]);
        arrm[i] = arr[i];
    }
    int a;
    a = i;
    int arr1[n];
    printf("\n");
    for (i = 0; i < n; i++)
    {
        printf("enter element of position:");
        scanf("%d", &arr1[i]);
    }
    for (i = 0; i < n; i++)
    {
        printf(" %d", arr1[i]);
        arrm[a] = arr1[i];
        a++;
    }
    printf("\n");
    printf("merge array:");
    for (int i = 0; i < a; i++)
    {

        printf(" %d", arrm[i]);
    }

    return 0;
}