export class Device {
  private id: string;
  private name: string;
  private state: boolean;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
    this.state = false;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getState(): boolean {
    return this.state;
  }

  setState(state: boolean): void {
    this.state = state;
  }

  toJSON(): any {
    return {
      id: this.id,
      name: this.name,
      state: this.state
    };
  }
}
