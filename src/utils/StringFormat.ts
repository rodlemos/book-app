class StringFormat {
  static capitalizeString(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  static charLimit(title: string): string {
    const limit = 20;

    if (title.length >= limit) {
      return title.substring(0, limit - 1) + "...";
    }

    return title;
  }
}

export { StringFormat };
