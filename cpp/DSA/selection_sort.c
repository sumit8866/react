#include <stdio.h>
#include <stdlib.h>

void selection()
{

    int n, small, t;
    printf("enter array size: ");
    scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n ; i++)
    {
        arr[i] = (rand() % 50 + 1);
        printf("%d  ", arr[i]);
    }

    for (int i = 0; i < n - 1; i++)
    {
        small = i;
        for (int j = i + 1; j < n; j++)
        {

            if (arr[j] < arr[small])
            {
                small =  j;
            }
        }
        t = arr[small];
        arr[small] = arr[i];
        arr[i] = t;
    }
    printf("\n");
    printf("after swapping :\n");
    for (int i = 0; i < n; i++)
    {
        printf("%d  ", arr[i]);
    }
}
int main()
{   
    selection();
}