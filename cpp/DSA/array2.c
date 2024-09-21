#include <stdio.h>
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

    printf("\n");
    temp = arr[0];
    arr[0] = arr[size - 1];
    arr[size - 1] = temp;

    printf("after swap: ");
    for (i = 0; i < size; i++)
    {
        printf(" %d ", arr[i]);
    }

    return 0;
}