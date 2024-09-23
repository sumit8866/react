#include <stdio.h>
#include <stdlib.h>
int n;

void data()
{
    printf("enter array size: ");
    scanf("%d", &n);
    int arr[n];
    int num, index = 0;
    
    for (int i = 0; i <= n; i++)
    {
        arr[i] = (rand() % 50 + 1);
        printf("%d ", arr[i]);
    }

    printf("select the elements:\n");
    scanf("%d", &num);

    for (int i = 0; i <= n; i++)
    {
        if (arr[i] == num)
        {
            printf("value is %d",num);
            printf(" found at index %d ", i);
            index = 1;
            break;
        }
    }
    if (index == 0)
    {
        printf(" element not found ");
    }
}
int main()
{

    data();
}
