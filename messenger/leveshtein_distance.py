def levenstein_distance(first, second):
    n, m = len(first), len(second)
    
    if n > m:
        first, second = second, first
        n, m = m, n
        
    curr_row = range(n+1)
    
    for i in range(1, m + 1):
        prev_row, curr_row = curr_row, [i] + [0]*n
        
        for j in range(1, n + 1):
            add, delete, change = prev_row[j] + 1, curr_row[j - 1] + 1, prev_row[j - 1]
            
            if first[j - 1] != second[i - 1]:
                change += 1
                
            curr_row[j] = min(add, delete, change)
            
    return curr_row[n]

if __name__ == '__main__':
    print(levenstein_distance('мышь', 'камыш'))
