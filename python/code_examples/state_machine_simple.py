class SimpleMark(object):

    PLAIN_TEXT = 'plain_text'
    PRE_BOLD = 'pre_bold'
    BOLD = 'bold'
    ITALIC = 'italic'
    PRE_END_BOLD = 'pre_end_bold'

    def __init__(self):
        self.__state = self.PLAIN_TEXT
        self.__buffer = ''

    @property
    def output(self):
        try:
            return self.__buffer[-1]
        except IndexError:
            print("Have no output data yet.")

    @property
    def result(self):
        return self.__buffer

    def __set_pre_bold(self):
        self.__state = self.PRE_BOLD

    def __set_bold(self):
        self.__state = self.BOLD
        return '<b>'

    def __set_pre_end_bold(self):
        self.__state = self.PRE_END_BOLD

    def __set_italic(self, symbol):
        self.__state = self.ITALIC
        return '<i>' + symbol

    def __set_end_italic(self):
        self.__state = self.PLAIN_TEXT
        return '</i>'

    def __set_end_bold(self):
        self.__state = self.PLAIN_TEXT
        return '</b>'

    def __update_buffer(self, symbol):
        return symbol

    def __handle_input(self, symbol):
        jump_table_1 = {
            self.PLAIN_TEXT: self.__set_pre_bold,
            self.PRE_BOLD: self.__set_bold,
            self.BOLD: self.__set_pre_end_bold,
            self.ITALIC: self.__set_end_italic,
            self.PRE_END_BOLD: self.__set_end_bold
        }

        jump_table_2 = {
            self.PLAIN_TEXT: self.__update_buffer,
            self.PRE_BOLD: self.__set_italic,
            self.BOLD: self.__update_buffer,
            self.ITALIC: self.__update_buffer,
            self.PRE_END_BOLD: self.__update_buffer
        }

        if symbol == '*':
            self.__buffer += jump_table_1[self.__state]() or ''
        else:
            self.__buffer += jump_table_2[self.__state](symbol)

    def input(self, symbol):
        self.__handle_input(symbol)

if __name__ == '__main__':
    machine = SimpleMark()

    line = "*italic* **BOLD** plain **BOLD** *italic*"
    for symbol in line:
        machine.input(symbol)
    print(machine.result)
