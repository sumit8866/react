#include <stdio.h>
int main()
{
    int size = 5;
    int arr[size];
    for (int i = 0; i  < size; i++)
    {
        printf("enter element of position:");
        scanf("%d", &arr[i]);
    }
    for (int i = 0; i < size; i++)
    {
        printf("  %d", arr[i]);
    }
    printf("\n");

    int temp = arr[0];
    for (int i = 0; i < size - 1; i++)
    {
        arr[i] = arr[i+1];
    }
    arr[size - 1] = temp;
    printf("after swap:");
    for (int i = 0; i < size; i++)
    {
        printf("  %d", arr[i]);
    }
    return 0;
}