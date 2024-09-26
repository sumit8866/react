#include <stdio.h>
#include <stdlib.h>

void bubble()
{
    int n, t;
    printf("enter array size: ");
    scanf("%d", &n);
    int arr[n];
    for (int i = 0; i <= n - 1; i++)
    {
        arr[i] = (rand() % 1000 + 1);
        printf("%d  ", arr[i]);
    }
    for (int i = 0; i < n - 1; i++)
    {
        for (int j = 0; j < n - 1 - i; j++)
        {

            if (arr[j] > arr[j + 1])
            {
                t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
            }
        }
    }
    printf("\n");
    printf("after swappping :\n");
    for (int i = 0; i < n; i++)
    {
        printf("%d  ", arr[i]);
    }
}
int main()
{

    bubble();
}