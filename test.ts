class ClassName {
  private static instance: ClassName | null = null;

  public static getInstance(): ClassName {
    if (this.instance === null) {
      this.instance = new ClassName();
    }

    return this.instance;
  }
}

const a = ClassName.getInstance;

const b = ClassName.getInstance;

console.log(a === b);
