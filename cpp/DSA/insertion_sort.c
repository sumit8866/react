#include <stdio.h>

void insert(int a[], int n) 
{
    int i, j, temp;
    for (i = 1; i < n; i++)
    {
        temp = a[i];
        j = i - 1;

        while (j >= 0 && temp <= a[j]) 
        {
            a[j + 1] = a[j];
            j = j - 1;
        }
        a[j + 1] = temp;
    }
}



int main()
{
    int n;
    printf("enter array size:");
    scanf("%d", &n);
    int arr[n];
    for (int i=0;i<n;i++){
        printf("enter array elements:");
        scanf("%d",&arr[i]);
    }
    for (int i = 0; i < n; i++)
    {
        printf("%d\t", arr[i]);
    }
    printf("\n");
    insert(arr, n);  
    printf("\nAfter sorting array elements are - \n");    
for (int i = 0; i < n; i++)
    {
        printf("%d\t", arr[i]);
    }    return 0;
}