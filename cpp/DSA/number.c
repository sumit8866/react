#include <stdio.h>

#define n 4

void find_indices_for_target() {
    int nums[n];
    int targets;
    for(int i=0;i<n;i++){
        printf("enter the element ");
        scanf("%d",&nums[i]);
    }
    for(int i=0;i<n;i++){
        printf("  %d",nums[i]);
    }

    printf("Enter target: ");
    scanf("%d", &targets);

    for (int i = 0; i < (1 << n); i++) { 
        int sum = 0;
        for (int j = 0; j < n; j++) {
            if (i & (1 << j)) { 
                sum += nums[j];
            }
        }
    
        if (sum == targets) {
            printf("Found target sum with indices: ");
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
    find_indices_for_target();
    return 0;
}
