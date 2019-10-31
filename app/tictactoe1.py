'''TicTacToe game program'''
class TicTacToe():

    '''TicTacToe game class'''
    def __init__(self):
        self._field = [' '] * 9
        self._filled = 0
        self._winner = 'Nobody'

    def set_x(self, value):
        self._field[value] = 'X'
        self._filled += 1

    def set_o(self, value):
        self._field[value] = 'O'
        self._filled += 1

    def validate(self, value):
        if value.isdigit():
            if 0 <= int(value) <= 8:
                if self._field[int(value)] == " ":
                    return True

        return False

    def get_field(self):
        field = """{} | {} | {} \n_________\n{} | {} | {} \n_________\n{} | {} | {} \n""".format(
            self._field[0], self._field[1], self._field[2],
            self._field[3], self._field[4], self._field[5],
            self._field[6], self._field[7], self._field[8]
            )

        return field

    def get_numerated_field(self):
        field = """{} | {} | {} \n_________\n{} | {} | {} \n_________\n{} | {} | {} \n""".format(
            0, 1, 2, 3, 4, 5, 6, 7, 8
            )

        return field


    def get_winner(self):
        return self._winner


    def is_finished(self):
        if self._filled >= 9:
            return True

        if((self._field[0] == self._field[1] == self._field[2] == 'X') or
           (self._field[3] == self._field[4] == self._field[5] == 'X') or
           (self._field[6] == self._field[7] == self._field[8] == 'X') or
           (self._field[0] == self._field[3] == self._field[6] == 'X') or
           (self._field[1] == self._field[4] == self._field[7] == 'X') or
           (self._field[2] == self._field[5] == self._field[8] == 'X') or
           (self._field[0] == self._field[4] == self._field[8] == 'X') or
           (self._field[6] == self._field[4] == self._field[2] == 'X')):
            self._winner = 'X'
            return True

        if((self._field[0] == self._field[1] == self._field[2] == 'O') or
           (self._field[3] == self._field[4] == self._field[5] == 'O') or
           (self._field[6] == self._field[7] == self._field[8] == 'O') or 
           (self._field[0] == self._field[3] == self._field[6] == 'O') or 
           (self._field[1] == self._field[4] == self._field[7] == 'O') or 
           (self._field[2] == self._field[5] == self._field[8] == 'O') or
           (self._field[0] == self._field[4] == self._field[8] == 'O') or 
           (self._field[6] == self._field[4] == self._field[2] == 'O')):
            self._winner = 'O'
            return True

        return False

def main():
    ttt = TicTacToe()
    player1 = input("Player1 input your name: ")
    player2 = input("Player2 input your name: ")

    print("Numerated field: ")
    print(ttt.get_numerated_field())

    print(ttt.get_field())
    step = 0

    while not ttt.is_finished():
        if step == 0:
            x = input("Enter the number of cell, {} >>> ".format(player1))
            valid = ttt.validate(x)

            if valid:
                ttt.set_x(int(x))
                step = 1
                print(ttt.get_field())
            else:
                print("Invalid cell number")
                continue

        else:
            o = input("Enter the number of cell, {} >>> ".format(player2))
            valid = ttt.validate(o)

            if valid:
                ttt.set_o(int(o))
                step = 0
                print(ttt.get_field())
            else:
                print("Invalid cell number")
                continue

    winner = ttt.get_winner()
    if winner == 'X':
        print("{} won the game".format(player1))
    elif winner == 'O':
        print("{} won the game".format(player2))
    else:
        print("Draw")

if __name__ == "__main__":
    main()
