"use client";

import { useState, useCallback } from "react";
import { toast } from "sonner";

interface UseCrudStoreOptions<T> {
  initialData: T[];
  entityName: string;
  generateId?: () => string;
}

export function useCrudStore<T extends { id: string }>({
  initialData,
  entityName,
  generateId = () => Math.random().toString(36).substr(2, 9),
}: UseCrudStoreOptions<T>) {
  const [data, setData] = useState<T[]>(initialData);
  const [isLoading, setIsLoading] = useState(false);

  const create = useCallback(
    (item: Omit<T, "id">) => {
      setIsLoading(true);
      const newItem = { ...item, id: generateId() } as T;
      setData((prev) => [...prev, newItem]);
      setIsLoading(false);
      toast("Success", {
        description: `${entityName} created successfully`,
      });
      return newItem;
    },
    [entityName, generateId],
  );

  const update = useCallback(
    (id: string, updates: Partial<T>) => {
      setIsLoading(true);
      setData((prev) =>
        prev.map((item) => (item.id === id ? { ...item, ...updates } : item)),
      );
      setIsLoading(false);
      toast("Success", {
        description: `${entityName} updated successfully`,
      });
    },
    [entityName],
  );

  const remove = useCallback(
    (id: string) => {
      setIsLoading(true);
      setData((prev) => prev.filter((item) => item.id !== id));
      setIsLoading(false);
      toast("Success", {
        description: `${entityName} deleted successfully`,
      });
    },
    [entityName],
  );

  const getById = useCallback(
    (id: string) => {
      return data.find((item) => item.id === id);
    },
    [data],
  );

  const filter = useCallback(
    (predicate: (item: T) => boolean) => {
      return data.filter(predicate);
    },
    [data],
  );

  return {
    data,
    setData,
    isLoading,
    create,
    update,
    remove,
    getById,
    filter,
  };
}
