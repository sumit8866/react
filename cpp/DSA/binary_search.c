#include <stdio.h>
#define n 8
int binary(int arr[], int low, int high)
{
    int x;
    // int low=0;
    // int high=n-1;
    int mid;
    for (int i = 0; i < n; i++)
    {
        printf("%d  ", arr[i]);
    }

    printf("\nenter the element:");
    scanf("%d", &x);

    while (low <= high)
    {
        mid = (high + low) / 2;

        if (arr[mid] == x)
        {
            return mid;
        }
        else if (arr[mid] < x)
        {
            low = mid + 1;
        }
        else
        {
            high = mid - 1;
        }
    }
    return -1;
}

int main()
{   

    int arr[n] = {2, 5, 7, 9, 11, 13, 15, 17};

    int index = binary(arr, 0, n - 1);

    if (index == -1)
    {
        printf("data not found");
    }
    else
    {
        printf("data index is :%d", index);
    }
}