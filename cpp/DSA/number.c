#include <stdio.h>

#define n 5


void number() {
    int nums[n];
    int targets;
    for(int i=0;i<n;i++){
        printf("enter the element ");
        scanf("%d",&nums[i]);
    }
    for(int i=0;i<n;i++){
        printf("  %d",nums[i]);
    }

    printf("\n");

    printf("Enter target: ");
    scanf("%d", &targets);

    for (int i = 0; i < (1 << n); i++) { 
        int sum = 0;
        for (int j = 0; j < n; j++) {
            if (i & (1 << j)) { 
                sum += nums[j];
            }
        }
    
        if(sum == targets) {
            printf("index is : ");
            for (int j = 0; j < n; j++) {
                if (i & (1 << j)) { 
                    printf("%d ", j);
                }
            }
            printf("\n");
        }
    }
}


int main() {
    number();
    return 0;
}