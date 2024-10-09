#include <stdio.h>

void merge(int arr[], int lb, int mid, int ub)
{
    int i = lb;
    int j = mid + 1;
    int k = lb;

    int arr1[50];

    while (i<=mid && j<=ub )
    {
        if (arr[i]<=arr[j])
        {
            arr1[k]=arr[i];
            i++;
        }
        else
        {
            arr1[k]=arr[j];
            j++;
        }
            k++;
    }
    if(i>mid)
    {
        while(j<=ub)
        {
            arr1[k]=arr[j];
            j++;
            k++;
        }
    }
    else
    {
        while(i<=mid)
        {
            arr1[k]=arr[i];
            i++;
            k++;
        }
    }
    for (k=lb;k<=ub;k++)
    {
        arr[k]=arr1[k];
        printf("%d\t",arr1[k]);
    }
}

void mergesort(int arr[],int lb,int ub)
{
    if(lb<ub)
    {
        int mid=(lb+ub)/2;
        mergesort(arr,lb,mid);
        mergesort(arr,mid+1,ub);
        printf("call:\n");
        merge(arr,lb,mid,ub);
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
    mergesort(arr,0,n-1); // mergesort(arr, n-n, n-1);
    printf("\n");
    printf("after swapping\n");
    for (int i = 0; i < n; i++)
    {
        printf("%d\t", arr[i]);
    }
    printf("\n");
    return 0;
}
