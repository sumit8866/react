#include <stdio.h>
#define n 8
int binary(int arr[])
{
    int num;
     int low=0;
     int high=n-1;
    int mid;
    for (int i = 0; i < n; i++)
    {
        printf("%d  ", arr[i]);
    }

    printf("\nenter the element:");
    scanf("%d", &num);

    while (low <= high)
    {
        mid = (high + low) / 2;

        if (arr[mid] == num)
        {
            return mid;
        }
        else if (arr[mid] < num)
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

    int index = binary(arr);

    if (index == -1)
    {
        printf("data not found");
    }
    else 
    {
        printf("data index is :%d", index);
    }
}