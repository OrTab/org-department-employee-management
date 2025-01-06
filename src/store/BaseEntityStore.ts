import { action, makeObservable, observable } from "mobx";
import { RootStore } from "./RootStore";

export class BaseEntityStore<T, R> {
  rootStore: RootStore;
  @observable entities: Record<string, T> = {};
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this);
  }

  @action
  setEntities({
    entitiesData,
    Entity,
  }: {
    entitiesData: Record<string, R>;
    Entity: new (rootStore: RootStore, entity: R) => T;
  }) {
    this.entities = Object.entries(entitiesData).reduce<Record<string, T>>(
      (entitiesPerId, [id, entity]) => {
        entitiesPerId[id] = new Entity(this.rootStore, entity);
        return entitiesPerId;
      },
      {}
    );
  }
}
